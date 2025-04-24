import { fireStore } from "@/config/firebase";
import { ResponseType, TransactionType, WalletType } from "@/types";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { uploadFileToCloudinary } from "./imageService";

export const createOrUpdateTransaction = async (
  trasactionData: Partial<TransactionType>
): Promise<ResponseType> => {
  try {
    const { id, type, walletId, amount, image } = trasactionData;
    if (!amount || amount <= 0 || !walletId || !type) {
      return { success: false, msg: "Invalid Transaction Data" };
    }

    if (id) {
      // update transaction
    } else {
      // update wallet on transaction

      let res = await updateWalletForNewTransaction(
        walletId!,
        Math.abs(Number(amount)),
        type
      );
      if (!res.success) return res;
    }
    if (image) {
      const imageUploadRes = await uploadFileToCloudinary(
        image,
        "transactions"
      );
      if (!imageUploadRes.success) {
        return {
          success: false,
          msg: imageUploadRes.msg || "Failed to upload receipt",
        };
      }
      trasactionData.image = imageUploadRes.data;
    }
    const transactionRef = id
      ? doc(fireStore, "transactions", id)
      : doc(collection(fireStore, "transactions"));

    await setDoc(transactionRef, trasactionData, { merge: true });

    return {
      success: true,
      data: { ...trasactionData, id: transactionRef?.id },
    };
  } catch (error: any) {
    console.log("error creating or deleting transaction", error);
    return { success: false, msg: error.message };
  }
};

const updateWalletForNewTransaction = async (
  walletId: string,
  amount: number,
  type: string
) => {
  try {
    const walletRef = doc(fireStore, "wallets", walletId);
    const walletSnapshot = await getDoc(walletRef);
    if (!walletSnapshot.exists()) {
      console.log("Wallet Id doesnt excist");
      return { success: false, msg: "Wallet not found" };
    }

    const walletData = walletSnapshot.data() as WalletType;
    if (type == "expense" && walletData?.amount! - amount < 0) {
      return {
        success: false,
        msg: "Selected Wallet dont have enough balance",
      };
    }

    const updatedType = type == "income" ? "totalIncome" : "totalExpenses";
    const updatedWalletAmount =
      type == "income"
        ? Number(walletData.amount) + amount
        : Number(walletData.amount) - amount;

    const updatedTotals =
      type == "income"
        ? Number(walletData.totalIncome) + amount
        : Number(walletData.totalExpenses) + amount;

    await updateDoc(walletRef, {
      amount: updatedWalletAmount,
      [updatedType]: updatedTotals,
    });
    return { success: true };
  } catch (err: any) {
    console.log("error updating wallet for new transaction", err);
    return { success: false, msg: err.message };
  }
};

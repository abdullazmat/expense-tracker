import { ResponseType, WalletType } from "@/types";
import { uploadFileToCloudinary } from "./imageService";
import { fireStore } from "@/config/firebase";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";

export const createOrUpdateWallet = async (
  walletData: Partial<WalletType>
): Promise<ResponseType> => {
  try {
    let walletToSave = { ...walletData };
    if (walletData.image) {
      const imageUploadRes = await uploadFileToCloudinary(
        walletData.image,
        "wallets"
      );
      if (!imageUploadRes.success) {
        return {
          success: false,
          msg: imageUploadRes.msg || "Failed to upload wallet icon",
        };
      }
      walletToSave.image = imageUploadRes.data;

      if (!walletData?.id) {
        //new wallet
        walletToSave.amount = 0;
        walletToSave.totalIncome = 0;
        walletToSave.totalExpenses = 0;
        walletToSave.created = new Date();
      }

      const walletRef = walletData?.id
        ? doc(fireStore, "wallets", walletData?.id)
        : doc(collection(fireStore, "wallets"));

      await setDoc(walletRef, walletToSave, { merge: true }); // updates only data provided
      return { success: true, data: { ...walletToSave, id: walletRef.id } };
    }
  } catch (error: any) {
    console.log("error creating or updating wallet", error);
    return { success: false, msg: error.message };
  }
  return { success: false, msg: "Invalid wallet data" };
};

export const deleteWallet = async (walletId: string): Promise<ResponseType> => {
  try {
    const walletRef = doc(fireStore, "wallets", walletId);
    await deleteDoc(walletRef);

    // delete all transactions related to wallet
    return { success: true, msg: "Wallet Deleted Successfully" };
  } catch (error: any) {
    console.log("error deleting wallet", error);
    return { success: false, msg: error.message };
  }
};

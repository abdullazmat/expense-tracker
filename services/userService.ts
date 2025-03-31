import { fireStore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const updateUser = async (
  uid: string,
  updatedData: UserDataType
): Promise<ResponseType> => {
  try {
    // img upload pending
    const userRef = doc(fireStore, "users", uid);
    await updateDoc(userRef, updatedData);

    // fetch user and update user data
    return { success: true, msg: "updated successfully" };
  } catch (error: any) {
    console.log("Error updating in user", error);
    return {
      success: false,
      msg: error?.message,
    };
  }
};

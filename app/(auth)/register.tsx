import BackButton from "@/components/BackButton";
import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { useRef, useState } from "react";
import { Text, StyleSheet, View, Pressable, Alert } from "react-native";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/authContext";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [isloading, setLoading] = useState(false);
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef) {
      Alert.alert("Sign Up", "Please fill all the fields");
      return;
    }
    setLoading(true);
    const res = await registerUser(
      emailRef.current,
      passwordRef.current,
      nameRef.current
    );
    setLoading(false);
    console.log("response result : ", res);
    if (!res.success) {
      Alert.alert("Sign Up", res.msg);
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />

        {/* Welcome Text  */}
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Let's
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Get Started
          </Typo>
        </View>

        {/* Login Form  */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an account to track all your expenses
          </Typo>
          <Input
            onChangeText={(value) => (nameRef.current = value)}
            placeholder="Enter your name"
            icon={
              <Icons.User
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            onChangeText={(value) => (emailRef.current = value)}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            icon={
              <Icons.At
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
            placeholder="Enter your password"
            icon={
              <Icons.Lock
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Button loading={isloading} onPress={handleSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>
              Sign Up
            </Typo>
          </Button>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Typo size={15}>Already have an account ? </Typo>
          <Pressable onPress={() => router.replace("/(auth)/login")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              Login
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: { gap: spacingY._20 },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
export default Register;

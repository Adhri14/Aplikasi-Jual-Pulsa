import React from "react";
import { View, TextInput as TextInputRN, StyleSheet, Text, TextInputProps } from "react-native";
import { colors, fonts } from "../utils/constants";

type TextInputType = TextInputProps & {
    label: string;
    placeholder?: string;
}

export default function TextInput({ label, placeholder, ...props }: TextInputType) {
    return (
        <View style={{ marginTop: 30 }}>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN placeholder={placeholder || '08123xxxxxx'} style={styles.input} placeholderTextColor={colors["gray-1"]} keyboardType="numeric" {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: fonts.semibold,
        color: colors.black,
        marginBottom: 14,
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderRadius: 14,
        fontFamily: fonts.regular,
        color: colors.black
    }
});
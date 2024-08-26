import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from '../utils/constants';
import FormatMoney from '../utils/format-money';

type CardType = {
    label: string;
    price: number;
    onPress?: () => void;
    selected?: boolean;
}

export default function Card({ label, price, onPress, selected = false }: CardType) {
    return (
        <Pressable onPress={onPress} style={[styles.container, { borderColor: selected ? colors.blue : 'white' }]}>
            <Text style={[styles.text, styles.bold]}>{label}</Text>
            <Text style={[styles.text]}>{FormatMoney.getFormattedMoney(price)}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: '45%',
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 2,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.regular,
        color: colors['gray-1']
    },
    bold: {
        fontSize: 32,
        fontFamily: fonts.medium,
        color: colors.black,
        textTransform: 'uppercase'
    }
});
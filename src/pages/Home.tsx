import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, Pressable } from "react-native";
import { colors, fonts } from "../utils/constants";
import TextInput from "../components/TextInput";
import Card from "../components/Card";

const items = [
    {
        id: 1,
        name: 'Pls 15K',
        price: 15000,
    },
    {
        id: 2,
        name: 'Pls 20K',
        price: 20000,
    },
    {
        id: 3,
        name: 'Pls 25K',
        price: 25000,
    },
    {
        id: 4,
        name: 'Pls 30K',
        price: 30000,
    },
    {
        id: 5,
        name: 'Pls 40K',
        price: 40000,
    },
    {
        id: 6,
        name: 'Pls 50K',
        price: 50000,
    },
    {
        id: 7,
        name: 'Pls 75K',
        price: 75000,
    },
    {
        id: 8,
        name: 'Pls 100K',
        price: 100000,
    },
    {
        id: 9,
        name: 'Pls 150K',
        price: 150000,
    },
    {
        id: 10,
        name: 'Pls 200K',
        price: 200000,
    },
    {
        id: 11,
        name: 'Pls 300K',
        price: 300000,
    },
    {
        id: 12,
        name: 'Pls 500K',
        price: 500000,
    },
    {
        id: 13,
        name: 'Pls 1Jt',
        price: 1000000,
        selected: false,
    },
];

export default function Home() {
    const [selected, setSelected] = useState<number | unknown>(null);
    const [form, setForm] = useState({
        phone: '',
        price: null
    });

    const onHandleChange = (key: string, value: any) => {
        setForm({
            ...form,
            [key]: value,
        });
    }

    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <Text style={styles.headerText}>Pulsa / Paket Data</Text>
            <TextInput label="Masukkan Nomor HP" value={form.phone} onChangeText={(val: string) => onHandleChange('phone', val)} />
            <FlatList
                data={items}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                    <View style={{ flex: 1 }} />
                )}
                contentContainerStyle={{
                    flexGrow: 1,
                    width: '100%',
                    paddingTop: 30,
                    paddingBottom: form.phone && form.price ? 100 : 0
                }}
                renderItem={({ item, index }) => (
                    <Card label={item.name} price={item.price} selected={index === selected} onPress={() => {
                        setSelected(index);
                        onHandleChange('price', item.price);
                    }} />
                )}
            />
            {form.phone && form.price && (
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Continue</Text>
                </Pressable>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 24
    },
    headerText: {
        fontSize: 20,
        fontFamily: fonts.semibold,
        color: colors.black,
        textAlign: 'center',
        paddingVertical: 20
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 13,
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 16,
        fontFamily: fonts.semibold,
        color: 'white'
    }
});
import { StyleSheet, Image, Platform, Button, Alert } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

function saldoConta() {
  Alert.alert('R$679,03');
}

function extrato() {
  Alert.alert('-16,98 | FARMACIA MORAES RIBEIRO LTDA');
}

function pix() {
  Alert.alert('Transferir');
}

function cartoes() {
  Alert.alert('| Cartão de débito');
}

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image style={styles.reactLogo}
          source={require('@/assets/images/SteBank1.png')}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Operações</ThemedText>
      </ThemedView>
      <ThemedText>A seguir você poderá fazer operações com o seu saldo bancário, ver o saldo em conta, visualizar o seu extrato e mais.</ThemedText>
      <Button
        title='Saldo em conta'
        onPress={saldoConta}
      />
      <Button
        title='Extrato'
        onPress={extrato}
      />
      <Button
        title='Área Pix'
        onPress={pix}
      />
      <Button
        title='Cartões'
        onPress={cartoes}
      />
      <Collapsible title="Saldo em conta">
        <ThemedText>
          R$679,03
        </ThemedText>
      </Collapsible>
      <Collapsible title="Extrato">
        <ThemedText>
          -16,98 |FARMACIA MORAES RIBEIRO LTDA
        </ThemedText>
        <ThemedText>
          -69,90 |AGRICER DIS COM PROD EIRELI
        </ThemedText>
        <ThemedText>
          -128,00 |MATERIAL DE CONSTRUCAO GASPAR II
        </ThemedText>
      </Collapsible>
      <Collapsible title="Área Pix">
        <ThemedText>
          Transferir
        </ThemedText>
        <ThemedText>
          Programar
        </ThemedText>
        <ThemedText>
          Ler QR code
        </ThemedText>
        <ThemedText>
          Pix Copia e Cola
        </ThemedText>
      </Collapsible>
      <Collapsible title="Cartões">
        <ThemedText>
          | Cartão de débito
        </ThemedText>
        <ThemedText>
          Agência 0002
        </ThemedText>
        <ThemedText>
          Conta 8569575-2
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
});

import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
       headerImage={
         <Image
           source={require('@/assets/images/SteBank (1).png')}
         />
       }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Operações</ThemedText>
      </ThemedView>
      <ThemedText>A seguir você poderá fazer operações com o seu saldo bancário, ver o saldo em conta, visualizar o seu extrato e mais.</ThemedText>
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
});

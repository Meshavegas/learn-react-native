# Composants de Base de React Native

React Native propose une série de composants de base qui permettent de créer des interfaces utilisateur pour les applications mobiles. Ces composants sont essentiels pour commencer à construire des applications efficaces et performantes.

## 1. `View`

Le composant **View** est l'équivalent du conteneur en HTML. Il est utilisé pour regrouper d'autres composants et créer la structure de base d'une interface.

- **Utilité** :

  - Organiser des composants visuels dans des blocs logiques.
  - Appliquer des styles, des marges et des positionnements à un groupe d'éléments.

- **Exemple** :

  ```jsx
  import React from "react";
  import { View, Text } from "react-native";

  const MyComponent = () => {
    return (
      <View style={{ padding: 10 }}>
        <Text>Hello, World!</Text>
      </View>
    );
  };

  export default MyComponent;
  ```

## 2. `Text`

Le composant **Text** est utilisé pour afficher du texte dans une application React Native. Il permet de personnaliser le style du texte, d'ajouter des formats et de rendre les textes interactifs.

- **Utilité** :

  - Afficher des informations textuelles, telles que des titres, des paragraphes, ou des boutons textuels.
  - Personnaliser l'apparence du texte (taille, couleur, alignement, etc.).

- **Exemple** :

  ```jsx
  import React from "react";
  import { Text, View } from "react-native";

  const MyComponent = () => {
    return (
      <View>
        <Text style={{ fontSize: 20, color: "blue" }}>
          Bienvenue sur mon app!
        </Text>
        <Text style={{ marginTop: 10 }}>Merci de nous avoir rejoint.</Text>
      </View>
    );
  };

  export default MyComponent;
  ```

## 3. `Image`

Le composant **Image** est utilisé pour afficher des images dans une application. Il prend en charge à la fois les images locales et distantes, ce qui en fait un élément clé pour enrichir l'interface visuelle.

- **Utilité** :

  - Afficher des images statiques ou dynamiques dans votre application.
  - Ajouter des icônes, des logos, des avatars ou des illustrations dans votre interface.

- **Exemple** :

  ```jsx
  import React from "react";
  import { Image, View } from "react-native";

  const MyComponent = () => {
    return (
      <View>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={require("./assets/local_image.png")}
          style={{ width: 100, height: 100, marginTop: 10 }}
        />
      </View>
    );
  };

  export default MyComponent;
  ```

## 4. `TextInput`

Le composant **TextInput** permet de créer des champs de saisie de texte dans une application. Il est utilisé pour capturer des entrées utilisateur, telles que des noms, des emails ou des mots de passe.

- **Utilité** :

  - Permettre à l'utilisateur de saisir du texte.
  - Capturer des informations comme des identifiants, des commentaires ou des recherches.
  - Gérer différentes options de saisie (clavier numérique, mot de passe, etc.).

- **Exemple** :

  ```jsx
  import React, { useState } from "react";
  import { TextInput, View, Text } from "react-native";

  const MyComponent = () => {
    const [text, setText] = useState("");

    return (
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 5,
          }}
          placeholder="Entrez votre nom"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Text style={{ marginTop: 10 }}>Vous avez entré : {text}</Text>
      </View>
    );
  };

  export default MyComponent;
  ```

## 5. `ScrollView`

Le composant **ScrollView** est utilisé pour créer des vues défilantes lorsque le contenu dépasse la taille de l'écran. Il permet à l'utilisateur de faire défiler le contenu verticalement ou horizontalement.

- **Utilité** :

  - Afficher de grandes quantités de contenu dans un espace limité.
  - Permettre le défilement vertical ou horizontal pour visualiser tout le contenu.
  - Idéal pour des listes, des formulaires longs ou des images à grande échelle.

- **Exemple** :

  ```jsx
  import React from "react";
  import { ScrollView, Text, View } from "react-native";

  const MyComponent = () => {
    return (
      <ScrollView style={{ margin: 20 }}>
        <View style={{ height: 600 }}>
          <Text>Premier élément</Text>
        </View>
        <View style={{ height: 600 }}>
          <Text>Deuxième élément</Text>
        </View>
        <View style={{ height: 600 }}>
          <Text>Troisième élément</Text>
        </View>
      </ScrollView>
    );
  };

  export default MyComponent;
  ```

## 6. `FlatList`

Le composant **FlatList** est utilisé pour afficher des listes de données optimisées. Contrairement à `ScrollView`, `FlatList` ne charge que les éléments visibles à l'écran, ce qui améliore les performances pour les grandes listes.

- **Utilité** :

  - Afficher de grandes quantités de données de manière performante.
  - Afficher des éléments sous forme de liste avec des capacités de défilement.
  - Optimiser le rendu pour des données longues ou volumineuses.

- **Exemple** :

  ```jsx
  import React from "react";
  import { FlatList, Text, View } from "react-native";

  const DATA = [
    { id: "1", title: "Premier élément" },
    { id: "2", title: "Deuxième élément" },
    { id: "3", title: "Troisième élément" },
    { id: "4", title: "Quatrième élément" },
  ];

  const MyComponent = () => {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  };

  export default MyComponent;
  ```

## 7. `SectionList`

Le composant **SectionList** est similaire à `FlatList`, mais il permet d'afficher des listes structurées en sections. Chaque section peut avoir un en-tête, et les éléments de cette section sont groupés sous celui-ci.

- **Utilité** :

  - Afficher des listes de données organisées par catégories ou sections.
  - Ajouter des en-têtes pour chaque groupe d'éléments.
  - Idéal pour des listes comme un répertoire téléphonique, des catégories de produits, ou des archives.

- **Exemple** :

  ```jsx
  import React from "react";
  import { SectionList, Text, View } from "react-native";

  const DATA = [
    {
      title: "A",
      data: ["Alice", "Arnold"],
    },
    {
      title: "B",
      data: ["Bob", "Brian"],
    },
    {
      title: "C",
      data: ["Charlie", "Catherine"],
    },
  ];

  const MyComponent = () => {
    return (
      <SectionList
        sections={DATA}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "#ddd", padding: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{section.title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
    );
  };

  export default MyComponent;
  ```

## 8. `TouchableOpacity`

Le composant **TouchableOpacity** est utilisé pour rendre un élément cliquable. Lorsqu'il est pressé, il réduit l'opacité de l'élément, offrant ainsi un retour visuel à l'utilisateur.

- **Utilité** :

  - Créer des boutons ou rendre des éléments interactifs.
  - Ajouter des retours visuels lorsque l'utilisateur interagit avec un élément.

- **Exemple** :

  ```jsx
  import React from "react";
  import { TouchableOpacity, Text, View, Alert } from "react-native";

  const MyComponent = () => {
    return (
      <View>
        <TouchableOpacity
          style={{ backgroundColor: "blue", padding: 10 }}
          onPress={() => Alert.alert("Bouton pressé")}
        >
          <Text style={{ color: "white" }}>Appuyez ici</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default MyComponent;
  ```

## 9. `StyleSheet`

Le composant **StyleSheet** est utilisé pour définir les styles des éléments dans une application React Native. Il fonctionne de manière similaire au CSS dans le développement web, mais avec une syntaxe adaptée à React Native.

- **Utilité** :

  - Centraliser et réutiliser les styles pour les composants.
  - Améliorer les performances en utilisant des styles statiques.
  - Structurer les styles de manière propre et organisée.

- **Exemple** :

  ```jsx
  import React from "react";
  import { View, Text, StyleSheet } from "react-native";

  const MyComponent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue dans l'application !</Text>
        <Text style={styles.subtitle}>Voici un exemple de StyleSheet.</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
    },
    subtitle: {
      fontSize: 16,
      color: "gray",
    },
  });

  export default MyComponent;
  ```

Pour en savoir plus sur les composants et API de React Native, vous pouvez consulter la documentation officielle à l'adresse suivante :

[React Native - Components and APIs](https://reactnative.dev/docs/components-and-apis)

Cette documentation détaillée vous donne un aperçu des différents composants disponibles dans React Native ainsi que les nombreuses APIs que vous pouvez utiliser pour interagir avec les fonctionnalités natives des appareils mobiles comme la caméra, la géolocalisation, le stockage, etc.

Chaque composant et API y est bien expliqué avec des exemples concrets et des guides pour une utilisation optimale. Cela vous permettra d'explorer plus en profondeur et de maîtriser les outils nécessaires pour créer des applications mobiles complètes et performantes.

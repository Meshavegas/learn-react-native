# Démarrage d'un projet React Native

Ce projet React Native a été créé à l'aide de [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Étape 0 : Configuration de l'environnement

Avant de commencer à développer avec React Native, il est important de configurer correctement votre environnement de développement. Suivez les étapes ci-dessous :

1. **Installer Node.js** : Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé. Vous pouvez vérifier si Node.js est installé en exécutant `node -v` dans votre terminal.
2. **Installer Watchman (pour macOS uniquement)** : Watchman est un outil utilisé pour surveiller les fichiers. Il est recommandé pour React Native sur macOS. Installez-le avec Homebrew :
   
   ```bash
   brew install watchman
   ```
3. **Installer Android Studio (pour Android)** :
   
   - Téléchargez et installez [Android Studio](https://developer.android.com/studio).
   - Assurez-vous d'installer le **SDK Android**, un **émulateur Android**, et le **plugin Android pour Gradle** à partir du SDK Manager dans Android Studio.
4. **Installer Xcode (pour iOS)** :
   
   - Téléchargez Xcode à partir du [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12) et installez-le.
   - Assurez-vous d'avoir installé les **Command Line Tools** via Xcode > Preferences > Locations.
5. Installer le gestionaire de packet recommader par le communaute : `yarn`
   
   ```bash
   npm install --global yarn
   ```
6. **Installer React Native CLI** :
   
   - Installez l'outil de ligne de commande React Native avec  yarn globalement sur votre machine :
   
   ```bash
   yarn global add react-native-cli
   ```

Pour plus de détails sur la configuration de l'environnement, suivez les instructions sur la page officielle de [configuration de l'environnement React Native](https://reactnative.dev/docs/environment-setup).

```bash
Pour le developement android veuillez utiliser la version 17 JDK
```

## Étape 1 : Créer un nouveau projet

Une fois l'environnement configuré, vous pouvez créer votre projet React Native. Utilisez la commande suivante dans votre terminal :

```bash
npx react-native init NomDuProjet
```

Remplacez `NomDuProjet` par le nom que vous souhaitez donner à votre application. Cette commande génère une structure de projet React Native avec tous les fichiers et configurations nécessaires.

## Étape 2 : Démarrer le serveur Metro

Metro est le _bundler_ JavaScript qui compile et sert votre code à l'application. Une fois le projet créé, démarrez Metro avec la commande suivante depuis la racine de votre projet :

```bash
# avec npm
npm start

# OU avec Yarn
yarn start
```

Cela démarre le serveur Metro, nécessaire pour exécuter l'application sur un appareil ou un émulateur.

## Étape 3 : Démarrer votre application

Lancez l'application sur un émulateur ou appareil physique. Dans un nouveau terminal, exécutez l'une des commandes suivantes en fonction de la plateforme cible.

### Pour Android

Si vous utilisez un appareil Android ou un émulateur Android, exécutez la commande suivante :

```bash
# OU avec Yarn
yarn android
```

### Pour iOS

Si vous utilisez un appareil iOS ou un simulateur iOS, exécutez la commande suivante :

```bash
# OU avec Yarn
yarn ios
```

Si tout est correctement configuré, votre application devrait se lancer dans l'émulateur ou l'appareil choisi.

## Étape 4 : Modifier votre application

Une fois l'application en cours d'exécution, vous pouvez modifier le code et voir les changements instantanément. Voici comment faire :

1. Ouvrez le fichier `App.tsx` dans votre éditeur de texte.
2. Faites quelques modifications (par exemple, changez le texte affiché).
3. Pour recharger l'application et voir les modifications :
   
   - **Sur Android** : Appuyez deux fois sur la touche <kbd>R</kbd> ou accédez au **Menu développeur** avec <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) ou <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS), puis sélectionnez "Reload".
   - **Sur iOS** : Appuyez sur <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> dans le simulateur iOS.

## Félicitations ! 🎉

Vous avez réussi à configurer votre environnement, créer un projet, et exécuter votre première application React Native !

---

### Que faire ensuite ?

- Si vous voulez ajouter ce projet React Native à une application existante, consultez le [guide d'intégration](https://reactnative.dev/docs/integration-with-existing-apps).
- Pour en savoir plus sur React Native, consultez l'[introduction à React Native](https://reactnative.dev/docs/getting-started).

# Dépannage

Si vous rencontrez des problèmes ou si l'application ne fonctionne pas comme prévu, consultez la page [Dépannage](https://reactnative.dev/docs/troubleshooting).

# Pour en savoir plus

Voici quelques ressources supplémentaires pour approfondir vos connaissances sur React Native :

- [Site Web React Native](https://reactnative.dev) - pour plus d'informations sur React Native.
- [Apprendre les bases](https://reactnative.dev/docs/getting-started) - une **visite guidée** des fondamentaux de React Native.
- [Blog](https://reactnative.dev/blog) - lisez les derniers articles officiels du blog React Native.

Avec ces étapes, vous êtes prêt à démarrer le développement avec React Native en français !


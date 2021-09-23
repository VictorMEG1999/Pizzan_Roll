import React from "react";
import { NativeBaseProvider, Button, Box } from "native-base";
export default class Login extends React.Component {
  render() {
    return (

      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Button onPress={() => this.props.navigation.navigate("Menu")}>
            Go to Menu
          </Button>
        </Box>
      </NativeBaseProvider>

    );
  }
}
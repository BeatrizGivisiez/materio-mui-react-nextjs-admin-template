//theme igor

// import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from "react";
// import { ThemeProvider, createTheme } from "@mui/material";

// interface IThemeContext {
//   colors: string
//   setColors: Dispatch<SetStateAction<string>>
// }

// const ThemeContext = createContext<IThemeContext>({
//   colors: '',
//   setColors: () => {}
// })

// const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [colors, setColors] = useState('#e96e16');

//   const theme = useMemo(() => createTheme({
//     palette: {
//       primary: {
//         main: colors
//       }
//     }
//   }), [colors]);

  
//   return (
//     <ThemeContext.Provider value={{colors, setColors}}>
//       <ThemeProvider theme={theme}>
//         {children}
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   )
// }


// export const useTheme = () => useContext(ThemeContext);
// export default CustomThemeProvider

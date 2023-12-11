BOT_DIR="SodicaBot-M"  
BOT_REPO="https://github.com/ramardo/$BOT_DIR" 
DB_FILE="database.json"
 
GREEN='\033[32m' 
BOLD='\033[1m' 
RESET='\033[0m' 
  
if [[ $(basename "$PWD") == "$BOT_DIR" ]]; then 
if [ -e "$DB_FILE" ]; then 
echo -e "${BOLD}${GREEN}Moviendo \"$DB_FILE\" a \"$HOME\" y clonando repositorio \"$BOT_REPO\" en \"$HOME\"...${RESET}"
mv "$HOME/$BOT_DIR/$DB_FILE" "$HOME" && cd && rm -rf "$HOME/$BOT_DIR" && git clone "$BOT_REPO" && cd "$HOME/$BOT_DIR" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$DB_FILE" ]; then
echo -e "${BOLD}${GREEN}Rescatando archivo \"$DB_FILE\" y moviendo a \"$BOT_DIR\".${RESET}"
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
mv "$HOME/$DB_FILE" "$HOME/$BOT_DIR/" && cd "$BOT_DIR" && npm start
else
echo -e "${BOLD}${GREEN}\"$DB_FILE\" No existe en \"$HOME\"${RESET}"
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
cd "$BOT_DIR" && npm start
fi

else
echo -e "${BOLD}${GREEN}\"$DB_FILE\" no se encontró en \"$BOT_DIR\", clonando repositorio \"$BOT_REPO\" en \"$HOME\"...${RESET}"
cd && rm -rf "$HOME/$BOT_DIR" && git clone "$BOT_REPO" && cd "$HOME/$BOT_DIR" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$DB_FILE" ]; then
echo -e "${BOLD}${GREEN}Rescatando archivo \"$DB_FILE\" y moviendo a \"$BOT_DIR\".${RESET}"
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
mv "$HOME/$DB_FILE" "$HOME/$BOT_DIR/" && cd "$BOT_DIR" && npm start
else
echo -e "${BOLD}${GREEN}\"$DB_FILE\" No existe en \"$HOME\"${RESET}"
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
cd "$BOT_DIR" && npm start
fi
fi

else
echo -e "${BOLD}${GREEN}Ubicación actual: \"$HOME\"${RESET}"
cd "$HOME"
if [ -e "$HOME/$BOT_DIR" ]; then
echo -e "${BOLD}${GREEN}Dirigiéndome a \"$BOT_DIR\".${RESET}"
cd "$HOME/$BOT_DIR"
if [ -e "$HOME/$BOT_DIR/$DB_FILE" ]; then
echo -e "${BOLD}${GREEN}Moviendo \"$DB_FILE\" a \"$HOME\" y clonando repositorio \"$BOT_REPO\" en \"$HOME\"...${RESET}"
mv "$HOME/$BOT_DIR/$DB_FILE" "$HOME" && cd && rm -rf "$BOT_DIR" && git clone "$BOT_REPO" && cd "$BOT_DIR" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$DB_FILE" ]; then
echo -e "${BOLD}${GREEN}Rescatando archivo \"$DB_FILE\" y moviendo a \"$BOT_DIR\".${RESET}"
mv "$HOME/$DB_FILE" "$HOME/$BOT_DIR/" && cd "$BOT_DIR" &&
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
npm start
else
echo -e "${BOLD}${GREEN}Dirigiéndome a \"$BOT_DIR\"...${RESET}"
echo -e "${BOLD}${GREEN}Heading to \"$BOT_DIR\".\n${RESET}"
cd "$BOT_DIR" && 
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
npm start
fi
else
echo -e "${BOLD}${GREEN}\"$DB_FILE\" no existe, clonando repositorio \"$BOT_REPO\" en \"$HOME\"...${RESET}"
cd && rm -rf "$BOT_DIR" && git clone "$BOT_REPO" && cd "$BOT_DIR" && yarn --ignore-scripts && npm install &&
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
npm start
fi
else
echo -e "${BOLD}${GREEN}\"$BOT_DIR\" no existe, clonando repositorio \"$BOT_REPO\" en \"$HOME\"...${RESET}"
git clone "$BOT_REPO" && cd "$BOT_DIR" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$DB_FILE" ]; then
echo -e "${BOLD}${GREEN}He encontrado un archivo \"$DB_FILE\" en \"$HOME\", lo moveré a \"$BOT_DIR\".${RESET}"
mv "$HOME/$DB_FILE" "$HOME/$BOT_DIR/" && cd "$BOT_DIR" && 
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
npm start
else
cd "$BOT_DIR" &&
echo -e "${BOLD}${GREEN}Iniciando $BOT_DIR...${RESET}"
npm start
fi
fi
fi

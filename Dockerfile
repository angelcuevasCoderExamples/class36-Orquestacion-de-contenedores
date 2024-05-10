FROM node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
#ENV MONGO_URI=mongodb+srv://angelpablocuevas1989:EghP7p3eTEtgWPyu@codercluster.5ny2sqo.mongodb.net/docker
CMD ["npm","start"]
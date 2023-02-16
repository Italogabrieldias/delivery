# Imagem base
FROM adoptopenjdk:17-jre-hotspot

# Diretório de trabalho do aplicativo
WORKDIR /delivery

# Copia o arquivo JAR para o diretório de trabalho
COPY target/*.jar delivery.jar

# Expor a porta 8080
EXPOSE 8081

# Comando para iniciar o aplicativo
CMD ["java", "-jar", "delivery.jar"]
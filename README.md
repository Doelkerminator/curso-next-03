# Development
Pasos para levantar la aplicación en desarrollo


1. Levantar la base de datos
- ```docker compose up -d```
2. Renombrar el .env.tembplate a .env
3. Reemplazar las variables del archivo de entorno.
4. Ejecutar el comando ```npm install```
5. Ejecutar el comando ```npm run dev```
6. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed).

# Prisma commands
- ```npx prisma init```
- ```npx prisma migrate dev```
- ```npx prisma generate```

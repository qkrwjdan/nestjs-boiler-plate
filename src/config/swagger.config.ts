import { DocumentBuilder } from '@nestjs/swagger';

export const appVersion = '1.0';

const title = 'Cake-Moim';

const description = `
The Cake-Moim API Description  
Cake-Moim API 서버 명세서입니다.  
`;

const localAPIServerUrl = 'http://localhost:3000';
const developmentAPIServerUrl = 'development';
const productionAPIServerUrl = 'production';

export const swaggerConfig = new DocumentBuilder()
  .addServer(localAPIServerUrl)
  .addServer(developmentAPIServerUrl)
  .addServer(productionAPIServerUrl)
  .setTitle(title)
  .setDescription(description)
  .setVersion(appVersion)
  .addBearerAuth()
  .build();

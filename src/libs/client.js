import process from 'process';
import { BlobServiceClient, StorageSharedKeyCredential, newPipeline } from '@azure/storage-blob';

// load environment variables
const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.AZURE_STORAGE_ACCOUNT_NAME,
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY
);

// create new pipeline
const pipeline = newPipeline(sharedKeyCredential);

// create new blob service client
const blobServiceClient = new BlobServiceClient(
  `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  pipeline
);

// export service client
export { blobServiceClient };
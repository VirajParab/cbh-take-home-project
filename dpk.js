const crypto = require("crypto");

const encrypt = (data) => {
  const SECURE_HASH_ALGORITHM = "sha3-512"
  const ENCODING = "hex"
  return crypto
    .createHash(SECURE_HASH_ALGORITHM)
    .update(data)
    .digest(ENCODING);
}

const generateKeyFrom = (partitionKey) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  let generatedKey = partitionKey

  if (typeof partitionKey !== "string") {
    generatedKey = JSON.stringify(partitionKey);
  }
  if (generatedKey.length > MAX_PARTITION_KEY_LENGTH) {
    generatedKey = encrypt(generatedKey);
  }
  return generatedKey
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = generateKeyFrom(event.partitionKey);
    } else {
      const data = JSON.stringify(event);
      candidate = encrypt(data);
    }
  }

  return candidate;
};
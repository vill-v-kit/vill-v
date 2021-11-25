import UTF8, { parse } from 'crypto-js/enc-utf8'
import ECB from 'crypto-js/mode-ecb'
import pkcs7 from 'crypto-js/pad-pkcs7'
import { encrypt, decrypt } from 'crypto-js/aes'

export interface EncryptionParams {
  key: string
  iv: string
}

export class AesEncryption {
  private key
  private readonly iv

  constructor(opt: Partial<EncryptionParams> = {}) {
    const { key, iv } = opt
    if (key) {
      this.key = parse(key)
    }
    if (iv) {
      this.iv = parse(iv)
    }
  }

  private get getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv,
    }
  }

  encryptByAES(cipherText: string) {
    return encrypt(cipherText, this.key, this.getOptions).toString()
  }

  decryptByAES(cipherText: string) {
    return decrypt(cipherText, this.key, this.getOptions).toString(UTF8)
  }
}

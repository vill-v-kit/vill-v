import UTF8 from 'crypto-js/enc-utf8'
import ECB from 'crypto-js/mode-ecb'
import pkcs7 from 'crypto-js/pad-pkcs7'
import AES from 'crypto-js/aes'

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
      this.key = UTF8.parse(key)
    }
    if (iv) {
      this.iv = UTF8.parse(iv)
    }
  }

  get getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv,
    }
  }

  encryptByAES(cipherText: string) {
    return AES.encrypt(cipherText, this.key, this.getOptions).toString()
  }

  decryptByAES(cipherText: string) {
    return AES.decrypt(cipherText, this.key, this.getOptions).toString(UTF8)
  }
}

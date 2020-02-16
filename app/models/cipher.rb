class Cipher < ApplicationRecord
  validates :code, 
    presence: true, 
    length: { 
      minimum: 10, 
      maximum: 100 
    }
    
  validates :secret_key, 
    presence: true,
    numericality: { 
      only_integer: true,
      greater_than_or_equal_to: 1,
      less_than_or_equal_to: 19 
    }

  def decrypt(cipher, key)
    
  end

  def encrypt(text, key)

    cipher = text.split('').map do |smb|
      ltr_num = alphabet.index(smb)
      if ltr_num.nil?
        smb
      else
        ltr_num
      end
    end
    cipher.map! do |el|
      if el.is_a? Integer
        encrypt_alphabet(key).at(el)
      else
        el
      end
    end
    
    return self.new(code: cipher.join(''), secret_key: key)
  end
end

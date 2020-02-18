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

  def self.decrypt(text, key)
    message = text.split('').map do |smb|
      ltr_num = self.encrypt_alphabet(key).index(smb)
      if ltr_num.nil?
        smb
      else
        ltr_num
      end
    end
    message.map! do |el|
      if el.is_a? Integer
        self.alphabet.at(el)
      else
        el
      end
    end

    return message
  end

  def self.encrypt(text, key)
    cipher = text.split('').map do |smb|
      ltr_num = self.alphabet.index(smb)
      if ltr_num.nil?
        smb
      else
        ltr_num
      end
    end
    cipher.map! do |el|
      if el.is_a? Integer
        self.encrypt_alphabet(key).at(el)
      else
        el
      end
    end
    
    return self.new(code: cipher.join(''), secret_key: key)
  end

  private

  def self.alphabet
    [
      'а', 'б', 'в', 'г',
      'д', 'е', 'ё', 'ж',
      'з', 'и', 'й', 'к',
      'л', 'м', 'н', 'о', 
      'п', 'р', 'с', 'т',
      'у', 'ф', 'х', 'ц',
      'ч', 'ш', 'щ', 'ъ',
      'ы', 'ь', 'э', 'ю',
      'я'
    ]
  end

  def self.encrypt_alphabet(key)
    alphabet[key..-1] + alphabet[0..key]
  end

end

class CiphersController < ApplicationController
  def index
    ciphers = Cipher.all
    render json: ciphers, status: 200
  end

  def decryption
    text = params[:cipher][:cipher].downcase
    key = params[:cipher][:key].to_i

    message = text.split('').map do |smb|
      ltr_num = encrypt_alphabet(key).index(smb)
      if ltr_num.nil?
        smb
      else
        ltr_num
      end
    end

    message.map! do |el|
      if el.is_a? Integer
        alphabet.at(el)
      else
        el
      end
    end
    
    render json: { text: message }, status: 200
  end

  def encryption
    text = params[:cipher][:text].downcase
    key = params[:cipher][:key].to_i
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
    new_cipher = Cipher.new(code: cipher.join(''), secret_key: key)
    if new_cipher.save
      render json: { code: new_cipher.code, secret_key: new_cipher.secret_key }, status: 201
    else
      render json: {}, status: 422
    end
  end

  private

  def encrypt_alphabet(key)
    alphabet[key..-1] + alphabet[0..key]
  end

  def alphabet
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

  def cipher_params
    params.require(:cipher).permit(:code, :secret_key)
  end
end

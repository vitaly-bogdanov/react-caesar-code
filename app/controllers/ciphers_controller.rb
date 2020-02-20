class CiphersController < ApplicationController
  include ProtectRoutesConcern
  before_action :set_key_and_text, only: [:decryption, :encryption]

  def decryption
    message = Cipher.decrypt(@text, @key)
    
    render json: { text: message }, status: 200
  end

  def encryption
    new_cipher = Cipher.encrypt(@text, @key)
    if new_cipher.save
      render json: new_cipher, status: 201
    else
      render json: {}, status: 422
    end
  end

  def destroy
    cipher = Cipher.find(params[:id])
    
    if cipher.destroy
      render json: {}, status: 200
    else
      render json: {}, status: 422
    end
  end

  private

  def set_key_and_text
    @text = params[:cipher][:text].downcase
    @key = params[:cipher][:key].to_i
  end

end

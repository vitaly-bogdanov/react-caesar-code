class UsersController < ApplicationController

  def create
    user = User.new email: params[:user][:email].downcase,
                    password: params[:user][:password],
                    password_confirmation: params[:user][:password_confirmation]

    if user.save
      session[:user_id] = user.id
      ciphers = Cipher.all
      render json: { loggedIn: true, user: user, ciphers: ciphers }, status: 201
    else
      render json: { error: user.errors }, status: 403
    end
  end
end

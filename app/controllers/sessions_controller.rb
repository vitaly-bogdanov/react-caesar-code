class SessionsController < ApplicationController
  include CurrentUserConcern

  def login
    user = User.find_by(email: params[:user][:email]).try(:authenticate, params[:user][:password])
    if user
      session[:user_id] = user.id
      session[:token] = user.password_digest
      ciphers = Cipher.all
      render json: { loggedIn: true, user: user, ciphers: ciphers }, status: 201
    else
      render json: { loggedIn: false, user: {} }, status: 401
    end
  end

  def check_login
    if @current_user
      ciphers = Cipher.all
      render json: { loggedIn: true, user: @current_user, ciphers: ciphers }, status: 200
    else
      render json: { loggedIn: false, user: {} }, status: 200
    end
  end

  def logout
    reset_session
    render json: { loggedIn: false, user: {} }, status: 200
  end
end

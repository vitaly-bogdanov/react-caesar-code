class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: { loggedIn: true, user: user }, status: 201
    else
      render json: { error: user.errors }, status: 403
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
  
end

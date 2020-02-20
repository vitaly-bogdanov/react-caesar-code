module ProtectRoutesConcern
  extend ActiveSupport::Concern

  included do
    before_action :session_verification, only: [:destroy, :decryption, :encryption]
  end

  def session_verification
    if session[:user_id].nil?
      render json: {}, status: 401
    end
  end
end
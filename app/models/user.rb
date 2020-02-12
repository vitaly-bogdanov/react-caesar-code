class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: { message: 'Пользователь с данным Email уже существует' }
end

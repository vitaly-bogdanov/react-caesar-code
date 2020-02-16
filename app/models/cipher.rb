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

end

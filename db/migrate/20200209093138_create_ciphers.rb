class CreateCiphers < ActiveRecord::Migration[6.0]
  def change
    create_table :ciphers do |t|
      t.text   :code
      t.string :secret_key

      t.timestamps
    end
  end
end

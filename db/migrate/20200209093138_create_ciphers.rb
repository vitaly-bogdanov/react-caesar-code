class CreateCiphers < ActiveRecord::Migration[6.0]
  def change
    create_table :ciphers do |t|
      t.text    :code,       null: false
      t.integer :secret_key, null: false

      t.timestamps
    end
  end
end

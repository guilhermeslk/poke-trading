class CreateTradeEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :trade_entries do |t|
      t.integer :total_experience_from
      t.integer :total_experience_to
      t.string :pokemons_from, array: true, default: []
      t.string :pokemons_to, array: true, default: []

      t.timestamps
    end
  end
end

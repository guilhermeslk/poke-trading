class TradeEntry < ApplicationRecord
  scope :ordered_by_created_at, -> { order(created_at: :desc) }
end

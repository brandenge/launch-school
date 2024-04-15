contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
                ["sally@email.com", "404 Not Found dr.", "123-234-3454"]]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

fields_arr = [:email, :address, :phone]

def populate_contacts(contacts, contact_data, fields_arr)
  contacts.each_with_index do |(name, contact_data_hash), idx|
    fields_arr.each do |contact_type|
      contact_data_hash[contact_type] = contact_data[idx].shift
    end
  end
  p contacts
end

populate_contacts(contacts, contact_data, fields_arr)

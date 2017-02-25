def two_degrees_away(hash, chosen_key)
  two_degrees = []
  first_degree = hash[chosen_key]
  second_degree_candidates = []
  hash.each do |person, friends|
    (0...first_degree.length).each do |i|
      if first_degree[i] == person
        second_degree_candidates << friends
      end
    end
  end
  p second_degree_candidates
  second_degree_candidates.flatten.uniq.each do |k|
    (0...first_degree.length).each do |n|
      if first_degree[n] != k && k != chosen_key
        two_degrees << k
      end
    end
  end
  two_degrees
end

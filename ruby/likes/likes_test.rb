require_relative "likes"
require "test/unit"

class TestLikes < Test::Unit::TestCase
    def test_typeIsString
        assert_true(likes([]).is_a?(String) )
      end
    def test_CorrectResultForEmpty
        assert_equal(likes([]), "no one likes this")
    end
    def test_CorrectResultForOne
        assert_equal(likes(['Peter']),"Peter likes this")
    end
    def test_CorrectResultForTwo
        assert_equal(likes(['Peter', 'Xaver']),"Peter and Xaver like this")
    end
    def test_CorrectResultForThree
        assert_equal(likes(['Peter', 'Xaver', "John"]), "Peter, Xaver and John like this")
    end
    def test_CorrectResultForMoreThanThree
        assert_equal(likes(['Peter', 'Xaver', "John", "Tim"]), "Peter, Xaver and 2 others like this")
    end
end
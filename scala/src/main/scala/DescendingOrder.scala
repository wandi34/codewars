class DescendingOrder {
  def descendingOrder(num: Int): Int = {
    return num.toString().sortWith(sortdescending).toInt
  }

  def sortdescending(s1: Char, s2: Char) = {
    s1 > s2
  }
}
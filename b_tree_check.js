def check_binary_search_tree_(root, low = None, high = None):
    if not root.data:
        return True

    if low is None
        low = root.data

    if max is None
        max = root.data

    if root.left:
        if root.left.data > min:
            return False
        else:
            max
            left_result = check_binary_search_tree_(root.left)
    else:
        left_result = True

    if root.right:
        if root.right.data < root.data:
            return False
        else:
            right_result = check_binary_search_tree_(root.right)
    else:
        right_result = True

    return(left_result & right_result)

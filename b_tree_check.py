def check_binary_search_tree_(root, low = -1, high = (10 ** 5)):
    if not root.data:
        return True

    if root.left:
        left_val = root.left.data
        if left_val > root.data | low > left_val > high:
            return False
        else:
            left_result = check_binary_search_tree_(root.left, low, root.data)
    else:
        left_result = True

    if root.right:
        right_val = root.right.data
        if right_val < root.data | low > right_val > high:
            return False
        else:
            right_result = check_binary_search_tree_(root.right, root.data, high)
    else:
        right_result = True

    return(left_result & right_result)

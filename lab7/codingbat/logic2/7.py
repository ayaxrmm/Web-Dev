def make_chocolate(small, big, goal):
    max_big_bars = min(big, goal // 5)

    remaining = goal - (max_big_bars * 5)

    if remaining <= small:
        return remaining
    else:
        return -1

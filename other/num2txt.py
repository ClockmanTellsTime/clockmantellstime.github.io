def num2txt(num):
    suffixes = ["million","billion","trillion","qd","qn","sx","sp","oct","non","D","unD","dD","trD","qdD","qnD","sxD","spD","octD","nonD","Vg","unVg","dVg","trVg","qdVg","qnVg","sxVg","spVg","ocVg","nonVg","Tg","unTg","dTg","tsTg","qdTg","qnTg","sxTG","spTg","ocTg","nonTg","Qdr","unQdr","dQdr","trQdr","qdQdr","qnQdr","sxQdr","spQdr","octQdr","nonQdr","Qgnt","INF"]
    numL = len(str(num))

    if num < 1000000:
        return num
        
    if numL > 76:
        return "INF"
        
    if (numL - 1) % 3 == 0:
        first = str(num)[0]
        suffix = suffixes[((numL - 1) // 3) - 2]
        
        return first + suffix
    if (numL - 2) % 3 == 0:
        first = str(num)[0]
        second = str(num)[1]
        suffix = suffixes[((numL - 2) // 3) - 2]
        
        return first + second + suffix
    if (numL - 3) % 3 == 0:
        first = str(num)[0]
        second = str(num)[1]
        third = str(num)[2]
        suffix = suffixes[((numL - 3) // 3) - 2]
        
        return first + second + third + suffix    

// Напишите функцию, которая возвращает общую площадь поверхности и объем коробки в виде массива:[area, volume]



function getSize(width, height, dept)
{
  let area=[]  
  let surface=width*height*2+height*dept*2+width*dept*2
  area.push(surface)
  let volume=width*height*dept
  area.push(volume)
  return area
 
  }
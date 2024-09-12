
export const FormatDate = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return formattedDate;
  }
export const Reduce_array_size = (reducable_array, start_value, end_value) => {
     return reducable_array.slice(start_value, end_value);
}
export const filter_array = (array, value) => {
    return array.filter((items) => items.status === value);
}

export const filter_by_status = (array, value) => {
    return array.filter((items) => items.status === value);
}

export const filter_by_id = (array, value) => {
     return array.filter((items) => items.id === value );
}

export const filter_element_by_id = (array, value) => {
    return array.filter((items) => items.id !== value);
}
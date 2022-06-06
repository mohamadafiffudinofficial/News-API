const getMonth=(month)=>{
    switch (month) {
        case 1:
            return 'Januari';
        case 2:
            return 'Februari';
        case 3:
            return 'Maret';
        case 4:
            return 'April';
        case 5:
            return 'Mei';
        case 6:
            return 'Juni';
        case 7:
            return 'Juli';
        case 8:
            return 'Agustus';
        case 9:
            return 'September';
        case 10:
            return 'Oktober';
        case 11:
            return 'November';
        case 12:
            return 'Desember';
        default:
            break;
    }
};

export const dateParser=(date)=>{
    const arrayDate = date.split('-');
    return `${arrayDate[2].slice(0,2)} ${getMonth(parseInt(arrayDate[1]))} ${arrayDate[0]}`;
};
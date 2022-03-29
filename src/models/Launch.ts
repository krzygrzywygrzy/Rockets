// dla właściwości links i rocket można by stworzyć osobny interfejs...
// ale danych jest w nich na tyle mało że postanowiłem tego nie robić

interface Launch {
  mission_name: string;
  launch_date_local: Date;
  links: {
    article_link?: string;
  };
  rocket: {
    rocket_name: string;
  };
}

export default Launch;

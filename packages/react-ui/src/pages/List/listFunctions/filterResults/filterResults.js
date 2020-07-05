export function filterResults({ filter, results }) {
  return filter
    ? (results || []).filter(comic => {
        const searchString = filter.toLowerCase();

        const t = (comic?.characters?.items || []).find(
          item => item.name.toLowerCase().indexOf(searchString) > -1
        );

        const t2 = (comic?.creators?.items || []).find(
          item => item.name.toLowerCase().indexOf(searchString) > -1
        );

        const t3 =
          (comic?.title || {}).toLowerCase().indexOf(searchString) > -1;

        return t || t2 || t3;
      })
    : results;
}

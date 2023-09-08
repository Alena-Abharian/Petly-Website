import { Typography } from '@mui/material';
import Section from 'components/Common/Section';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SearchInput from '../../components/Common/SearchInput';
import Loader from '../../components/Loader';
import NewsList from '../../components/News/NewsList';
import { getDate } from '../../services/api/DataApi';
import { StyledContainer, StyledTitle } from './NewsPage.styled';

function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [q, setQ] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDate('news');
        setNews(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  const changeHandler = event => {
    setQ(event.target.value);
  };

  const clearInput = () => {
    setQ('');
  };

  // const debouncedChangeHandler = useMemo(
  //   () => debounce(changeHandler, 400),
  //   []
  // );

  function search(items) {
    const sortedArr = items.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (q.trim() === '') return sortedArr;
    return sortedArr.filter(item =>
      item.title.toLowerCase().includes(q.trim().toLowerCase())
    );
  }

  return (
    <>
      <Section>
        <StyledContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        >
          <StyledTitle>News</StyledTitle>
          <SearchInput
            onChange={changeHandler}
            value={q}
            clearInput={clearInput}
          />
          {isLoading && <Loader />}
          {error && <div>{error.message}</div>}
          {!error && !isLoading && search(news).length === 0 && (
            <Typography component={'p'} sx={{ textAlign: 'center' }}>
              News not found
            </Typography>
          )}
          {news && <NewsList news={search(news)} />}
        </StyledContainer>
      </Section>
    </>
  );
}

export default NewsPage;

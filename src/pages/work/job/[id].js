import { useRouter } from 'next/router';
import React from 'react';
import { BsExplicit, BsPersonVcard } from 'react-icons/bs';
import { IoFilmOutline } from 'react-icons/io5';
import { icon, langs } from '@/globals';
import { fetchDetailById } from '@/db';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { PageDetail, Section, SEO } from '@/layouts';
import { DetailInfo, PreviewInfo } from '@/components';

const id = 'job';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function JobDetail({ data }) {
  const { locale } = useRouter();
  if (!data) return <E404 />;
  const set = langs[locale].detail;
  const setWork = langs[locale].work;
  const breads = [
    { name: setWork.name, href: '/work', icon: icon.work.Icon },
    {
      name: setWork?.[id].title,
      href: `/work#${id}`,
      icon: icon.work?.[id]?.Icon,
    },
    {
      name: data?.title || data?.name,
      href: '#',
      icon: icon.detail.Icon,
    },
  ];

  return (
    <>
      <SEO
        title={`${set.title} ${setWork?.[id].title} - ${data.title}`}
        name={data?.title || set?.name}
        desc={data?.desc || set?.desc}
        card={data.thumbnail}
      />
      <PageDetail set={set} data={data} breads={breads}>
        {data?.role && (
          <Section title={set.role} id="role" sep={4} icon={<BsPersonVcard />}>
            {data?.role && <DetailInfo data={data.role} mt={2} />}
          </Section>
        )}
        {data?.exp && (
          <Section title={set.exp} id="exp" sep={4} icon={<BsExplicit />}>
            <DetailInfo data={data.exp} mt={2} />
          </Section>
        )}
        {data?.memory && (
          <Section
            title={set.memory}
            id="memory"
            sep={4}
            icon={<IoFilmOutline />}
          >
            <PreviewInfo data={data.memory} />
          </Section>
        )}
      </PageDetail>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchDetailById(context.query.id, id, storage.lang);
  return {
    props: { storage, data },
  };
}

export default JobDetail;

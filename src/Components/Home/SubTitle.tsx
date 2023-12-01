import React from 'react'
import { TSubTitle } from '../../Layout/app/Types';
import { useTranslation } from 'react-i18next';

const SubTitle = ({title,href,count,icon}:TSubTitle) => {
  const [t] = useTranslation()
  return (
    <div className='SubTitle'>
        <div>
       {icon}
       {t(`${title}`)}
        </div>
        <div>
            <a href={`/${href}`}>
            {t("See more")}{count}
            </a>
        </div>

    </div>
  )
}

export default SubTitle
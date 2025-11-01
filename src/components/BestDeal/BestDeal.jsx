import React from 'react'
import { useState } from 'react'
import CategoryButton from './CategoryButton'
import BestDealContent from './BestDealContent'
import MenuData from '../../database/menu.json'

const BestDeal = () => {

    const [menuData] = useState(MenuData);

    const [selectedCategory, setSelectedCategory] = useState(MenuData.find(q => q.bestDeal === true));


    const chooseCategory = (category) => {
        const categoryInfo = MenuData.find(q => q.category === category && q.bestDeal);
        if (categoryInfo) {
            setSelectedCategory(categoryInfo)
        }
    }

    return (
        <section className='bestDealSection'>
            
                <div className='bestDealtitleBlock'>
                    
                    <h1 className='bestDealtitle'>Find Your Best Deal Right Now!</h1>

                    <div className='BestDealCategoryButtons'>

                        {menuData.filter((item, index, self) =>
                            index === self.findIndex(t => t.category === item.category)).map((item, index) => (
                                <CategoryButton key={index} name={item.category} setCategory={chooseCategory} active={selectedCategory?.category === item.category} />
                            ))}
                    </div>
                </div>
                <BestDealContent info={selectedCategory}></BestDealContent>
            
        </section>
    )
}

export default BestDeal

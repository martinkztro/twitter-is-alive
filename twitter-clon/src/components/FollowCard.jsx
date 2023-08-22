import { Button } from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, User} from "@nextui-org/react";
import {UserTwitterCard} from './UserTwitterCard';

const FollowCard = ({name, avatar, username}) => {

    return (
        <>
        
            <figure className='grid grid-cols-2 gap-10 items-center '>
                <Popover showArrow placement="bottom">
                    <PopoverTrigger>
                        <User
                            as="button"
                            name={name}
                            description={username}
                            className="transition-transform text-white font-medium font-sans"
                            avatarProps={{
                                src: {avatar}
                            }}
                        />
                    </PopoverTrigger>
                    <PopoverContent className="p-1">
                        <UserTwitterCard />
                    </PopoverContent>
                </Popover>

                <Button color="primary" variant="solid" className="h-8 rounded-3xl px-7 text-center w-20">
                        Follow
                </Button>
            </figure>        
        
        
        
        </>
    )


}

export default FollowCard;